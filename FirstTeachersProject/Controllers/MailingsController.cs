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
    public class MailingsController : Controller
    {
        private FirstTeachersContext db = new FirstTeachersContext();

		public ActionResult List() {
			return new JsonNetResult { Data = db.Mailings.ToList() };
		}
		public ActionResult Get(int id) {
			if (id == 0) return InputIsNullOrEmpty();
			return new JsonNetResult { Data = db.Mailings.Find(id) };
		}
		public ActionResult Add(Mailing mailing) {
			if (mailing.Name == null) { return InputIsNullOrEmpty(); }
			db.Mailings.Add(mailing);
			db.SaveChanges();
			return new JsonNetResult { Data = new JsonReturnMessage { Result = "Ok", Message = "Success" } };
		}
		public ActionResult Change(Mailing mailing) {
			if (mailing.Name == null) { return InputIsNullOrEmpty(); }
			Mailing amailing = db.Mailings.Find(mailing.Id);
			amailing.Clone(mailing);
			db.SaveChanges();
			return new JsonNetResult { Data = new JsonReturnMessage { Result = "Ok", Message = "Success" } };
		}
		public ActionResult Remove(int id) {
			if (id == 0) { return InputIsZeroForId(); }
			Mailing mailing = db.Mailings.Find(id);
			db.Mailings.Remove(mailing);
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
		// GET: Mailings
		public ActionResult Index()
        {
            return View(db.Mailings.ToList());
        }

        // GET: Mailings/Details/5
        public ActionResult Details(int? id)
        {
            if (id == null)
            {
                return new HttpStatusCodeResult(HttpStatusCode.BadRequest);
            }
            Mailing mailing = db.Mailings.Find(id);
            if (mailing == null)
            {
                return HttpNotFound();
            }
            return View(mailing);
        }

        // GET: Mailings/Create
        public ActionResult Create()
        {
            return View();
        }

        // POST: Mailings/Create
        // To protect from overposting attacks, please enable the specific properties you want to bind to, for 
        // more details see https://go.microsoft.com/fwlink/?LinkId=317598.
        [HttpPost]
        [ValidateAntiForgeryToken]
        public ActionResult Create([Bind(Include = "Id,Name,MailAfterMonths,Active,DateCreated,DateUpdated")] Mailing mailing)
        {
            if (ModelState.IsValid)
            {
                db.Mailings.Add(mailing);
                db.SaveChanges();
                return RedirectToAction("Index");
            }

            return View(mailing);
        }

        // GET: Mailings/Edit/5
        public ActionResult Edit(int? id)
        {
            if (id == null)
            {
                return new HttpStatusCodeResult(HttpStatusCode.BadRequest);
            }
            Mailing mailing = db.Mailings.Find(id);
            if (mailing == null)
            {
                return HttpNotFound();
            }
            return View(mailing);
        }

        // POST: Mailings/Edit/5
        // To protect from overposting attacks, please enable the specific properties you want to bind to, for 
        // more details see https://go.microsoft.com/fwlink/?LinkId=317598.
        [HttpPost]
        [ValidateAntiForgeryToken]
        public ActionResult Edit([Bind(Include = "Id,Name,MailAfterMonths,Active,DateCreated,DateUpdated")] Mailing mailing)
        {
            if (ModelState.IsValid)
            {
                db.Entry(mailing).State = EntityState.Modified;
                db.SaveChanges();
                return RedirectToAction("Index");
            }
            return View(mailing);
        }

        // GET: Mailings/Delete/5
        public ActionResult Delete(int? id)
        {
            if (id == null)
            {
                return new HttpStatusCodeResult(HttpStatusCode.BadRequest);
            }
            Mailing mailing = db.Mailings.Find(id);
            if (mailing == null)
            {
                return HttpNotFound();
            }
            return View(mailing);
        }

        // POST: Mailings/Delete/5
        [HttpPost, ActionName("Delete")]
        [ValidateAntiForgeryToken]
        public ActionResult DeleteConfirmed(int id)
        {
            Mailing mailing = db.Mailings.Find(id);
            db.Mailings.Remove(mailing);
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
