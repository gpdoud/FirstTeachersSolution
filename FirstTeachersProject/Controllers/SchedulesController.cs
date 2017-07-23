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
    public class SchedulesController : Controller
    {
        private FirstTeachersContext db = new FirstTeachersContext();

		public ActionResult List() {
			return new JsonNetResult { Data = db.Schedules.ToList() };
		}
		public ActionResult Get(int id) {
			return new JsonNetResult { Data = db.Schedules.Find(id) };
		}
		public ActionResult Add(Schedule schedule) {
			if (schedule.DateToMail == DateTime.MinValue) { return InputIsNullOrEmpty(); }
			db.Schedules.Add(schedule);
			db.SaveChanges();
			return new JsonNetResult { Data = new JsonReturnMessage { Result = "Ok", Message = "Success" } };
		}
		public ActionResult Change(Schedule schedule) {
			if (schedule.DateToMail == DateTime.MinValue) { return InputIsNullOrEmpty(); }
			Schedule aschedule = db.Schedules.Find(schedule.Id);
			aschedule.Clone(schedule);
			db.SaveChanges();
			return new JsonNetResult { Data = new JsonReturnMessage { Result = "Ok", Message = "Success" } };
		}
		public ActionResult Remove(int id) {
			if (id == 0) { return InputIsZeroForId(); }
			Schedule schedule = db.Schedules.Find(id);
			db.Schedules.Remove(schedule);
			db.SaveChanges();
			return new JsonNetResult { Data = new JsonReturnMessage { Result = "Ok", Message = "Success" } };
		}
		private ActionResult InputIsNullOrEmpty() {
			return new JsonNetResult { Data = new JsonReturnMessage { Result = "Error", Message = "Input is NULL or Empty!" } };
		}
		private ActionResult InputIsZeroForId() {
			return new JsonNetResult { Data = new JsonReturnMessage { Result = "Error", Message = "Input is Zero for Id!" } };
		}
		#region MVC Methods
		// GET: Schedules
		public ActionResult Index()
        {
            var schedules = db.Schedules.Include(s => s.Child).Include(s => s.Mailing);
            return View(schedules.ToList());
        }

        // GET: Schedules/Details/5
        public ActionResult Details(int? id)
        {
            if (id == null)
            {
                return new HttpStatusCodeResult(HttpStatusCode.BadRequest);
            }
            Schedule schedule = db.Schedules.Find(id);
            if (schedule == null)
            {
                return HttpNotFound();
            }
            return View(schedule);
        }

        // GET: Schedules/Create
        public ActionResult Create()
        {
            ViewBag.ChildId = new SelectList(db.Children, "Id", "Name");
            ViewBag.MailingId = new SelectList(db.Mailings, "Id", "Name");
            return View();
        }

        // POST: Schedules/Create
        // To protect from overposting attacks, please enable the specific properties you want to bind to, for 
        // more details see https://go.microsoft.com/fwlink/?LinkId=317598.
        [HttpPost]
        [ValidateAntiForgeryToken]
        public ActionResult Create([Bind(Include = "Id,DateToMail,DateMailed,ChildId,MailingId")] Schedule schedule)
        {
            if (ModelState.IsValid)
            {
                db.Schedules.Add(schedule);
                db.SaveChanges();
                return RedirectToAction("Index");
            }

            ViewBag.ChildId = new SelectList(db.Children, "Id", "Name", schedule.ChildId);
            ViewBag.MailingId = new SelectList(db.Mailings, "Id", "Name", schedule.MailingId);
            return View(schedule);
        }

        // GET: Schedules/Edit/5
        public ActionResult Edit(int? id)
        {
            if (id == null)
            {
                return new HttpStatusCodeResult(HttpStatusCode.BadRequest);
            }
            Schedule schedule = db.Schedules.Find(id);
            if (schedule == null)
            {
                return HttpNotFound();
            }
            ViewBag.ChildId = new SelectList(db.Children, "Id", "Name", schedule.ChildId);
            ViewBag.MailingId = new SelectList(db.Mailings, "Id", "Name", schedule.MailingId);
            return View(schedule);
        }

        // POST: Schedules/Edit/5
        // To protect from overposting attacks, please enable the specific properties you want to bind to, for 
        // more details see https://go.microsoft.com/fwlink/?LinkId=317598.
        [HttpPost]
        [ValidateAntiForgeryToken]
        public ActionResult Edit([Bind(Include = "Id,DateToMail,DateMailed,ChildId,MailingId")] Schedule schedule)
        {
            if (ModelState.IsValid)
            {
                db.Entry(schedule).State = EntityState.Modified;
                db.SaveChanges();
                return RedirectToAction("Index");
            }
            ViewBag.ChildId = new SelectList(db.Children, "Id", "Name", schedule.ChildId);
            ViewBag.MailingId = new SelectList(db.Mailings, "Id", "Name", schedule.MailingId);
            return View(schedule);
        }

        // GET: Schedules/Delete/5
        public ActionResult Delete(int? id)
        {
            if (id == null)
            {
                return new HttpStatusCodeResult(HttpStatusCode.BadRequest);
            }
            Schedule schedule = db.Schedules.Find(id);
            if (schedule == null)
            {
                return HttpNotFound();
            }
            return View(schedule);
        }

        // POST: Schedules/Delete/5
        [HttpPost, ActionName("Delete")]
        [ValidateAntiForgeryToken]
        public ActionResult DeleteConfirmed(int id)
        {
            Schedule schedule = db.Schedules.Find(id);
            db.Schedules.Remove(schedule);
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
