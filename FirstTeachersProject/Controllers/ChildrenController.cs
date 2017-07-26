using System;
using System.Collections.Generic;
using System.Data;
using System.Data.Entity;
using System.Linq;
using System.Net;
using System.Web;
using System.Web.Mvc;
using FirstTeachersProject.Models;
using WebApiUtilities;

namespace FirstTeachersProject.Controllers
{
    public class ChildrenController : Controller
    {
        private FirstTeachersContext db = new FirstTeachersContext();

		public ActionResult ScheduleMailings(int Id) {
			Child child = db.Children.Find(Id);
			if(child == null) {
				return new JsonNetResult { Data = new JsonReturnMessage { Result = "Error", Message = "ChildId is not found" } };
			}
			foreach (Mailing mailing in db.Mailings.ToList()) {
				Schedule schedule = new Schedule {
					Id = 0,
					DateToMail = child.DateBaptized.AddMonths(mailing.MailAfterMonths),
					DateMailed = null,
					ChildId = Id,
					MailingId = mailing.Id,
					DateCreated = DateTime.Now,
					DateUpdated = null
				};
				db.Schedules.Add(schedule);
			}
			db.SaveChanges();
			return new JsonNetResult { Data = new JsonReturnMessage { Result = "Ok", Message = "Success" } };
		}
		public ActionResult List() {
			return new JsonNetResult { Data = db.Children.ToList() };
		}
		public ActionResult Get(int id) {
			if (id == 0) return InputIsNullOrEmpty();
			return new JsonNetResult { Data = db.Children.Find(id) };
		}
		public ActionResult Add(Child child) {
			if (child.Name == null) { return InputIsNullOrEmpty(); }
			db.Children.Add(child);
			db.SaveChanges();
			return new JsonNetResult { Data = new JsonReturnMessage { Result = "Ok", Message = "Success" } };
		}
		public ActionResult Change(Child child) {
			if (child.Name == null) { return InputIsNullOrEmpty(); }
			Child achild = db.Children.Find(child.Id);
			achild.Clone(child);
			db.SaveChanges();
			return new JsonNetResult { Data = new JsonReturnMessage { Result = "Ok", Message = "Success" } };
		}
		public ActionResult Remove(int id) {
			if (id == 0) { return InputIsZeroForId(); }
			Child child = db.Children.Find(id);
			db.Children.Remove(child);
			db.SaveChanges();
			return new JsonNetResult { Data = new JsonReturnMessage { Result = "Ok", Message = "Success" } };
		}
		private ActionResult InputIsNullOrEmpty() {
			return new JsonNetResult { Data = new JsonReturnMessage { Result = "Error", Message = "Input is NULL or Empty!" } };
		}
		private ActionResult InputIsZeroForId() {
			return new JsonNetResult { Data = new JsonReturnMessage { Result = "Error", Message = "Input is Zero for Id!" } };
		}
		#region MVC Controllers
		// GET: Children
		public ActionResult Index()
        {
            var children = db.Children.Include(c => c.Parent);
            return View(children.ToList());
        }

        // GET: Children/Details/5
        public ActionResult Details(int? id)
        {
            if (id == null)
            {
                return new HttpStatusCodeResult(HttpStatusCode.BadRequest);
            }
            Child child = db.Children.Find(id);
            if (child == null)
            {
                return HttpNotFound();
            }
            return View(child);
        }

        // GET: Children/Create
        public ActionResult Create()
        {
            ViewBag.ParentId = new SelectList(db.Parents, "Id", "Name");
            return View();
        }

        // POST: Children/Create
        // To protect from overposting attacks, please enable the specific properties you want to bind to, for 
        // more details see https://go.microsoft.com/fwlink/?LinkId=317598.
        [HttpPost]
        [ValidateAntiForgeryToken]
        public ActionResult Create([Bind(Include = "Id,Name,DateBaptized,ParentId")] Child child)
        {
            if (ModelState.IsValid)
            {
                db.Children.Add(child);
                db.SaveChanges();
                return RedirectToAction("Index");
            }

            ViewBag.ParentId = new SelectList(db.Parents, "Id", "Name", child.ParentId);
            return View(child);
        }

        // GET: Children/Edit/5
        public ActionResult Edit(int? id)
        {
            if (id == null)
            {
                return new HttpStatusCodeResult(HttpStatusCode.BadRequest);
            }
            Child child = db.Children.Find(id);
            if (child == null)
            {
                return HttpNotFound();
            }
            ViewBag.ParentId = new SelectList(db.Parents, "Id", "Name", child.ParentId);
            return View(child);
        }

        // POST: Children/Edit/5
        // To protect from overposting attacks, please enable the specific properties you want to bind to, for 
        // more details see https://go.microsoft.com/fwlink/?LinkId=317598.
        [HttpPost]
        [ValidateAntiForgeryToken]
        public ActionResult Edit([Bind(Include = "Id,Name,DateBaptized,ParentId")] Child child)
        {
            if (ModelState.IsValid)
            {
                db.Entry(child).State = EntityState.Modified;
                db.SaveChanges();
                return RedirectToAction("Index");
            }
            ViewBag.ParentId = new SelectList(db.Parents, "Id", "Name", child.ParentId);
            return View(child);
        }

        // GET: Children/Delete/5
        public ActionResult Delete(int? id)
        {
            if (id == null)
            {
                return new HttpStatusCodeResult(HttpStatusCode.BadRequest);
            }
            Child child = db.Children.Find(id);
            if (child == null)
            {
                return HttpNotFound();
            }
            return View(child);
        }

        // POST: Children/Delete/5
        [HttpPost, ActionName("Delete")]
        [ValidateAntiForgeryToken]
        public ActionResult DeleteConfirmed(int id)
        {
            Child child = db.Children.Find(id);
            db.Children.Remove(child);
            db.SaveChanges();
            return RedirectToAction("Index");
        }
		#endregion
		protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                db.Dispose();
            }
            base.Dispose(disposing);
        }
    }
}
