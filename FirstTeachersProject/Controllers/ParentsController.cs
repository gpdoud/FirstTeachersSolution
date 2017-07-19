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
    public class ParentsController : Controller
    {
        private FirstTeachersContext db = new FirstTeachersContext();

		public ActionResult List() {
			return new JsonNetResult { Data = db.Parents.ToList() };
		}
		public ActionResult Get(int id) {
			return new JsonNetResult { Data = db.Parents.Find(id) };
		}
		public ActionResult Add(Parent parent) {
			if (parent.Name == null) { return InputIsNullOrEmpty(); }
			db.Parents.Add(parent);
			db.SaveChanges();
			return new JsonNetResult { Data = new JsonReturnMessage { Result = "Ok", Message = "Success" } };
		}
		public ActionResult Change(Parent parent) {
			if (parent.Name == null) { return InputIsNullOrEmpty(); }
			Parent aparent = db.Parents.Find(parent.Id);
			aparent.Clone(parent);
			db.SaveChanges();
			return new JsonNetResult { Data = new JsonReturnMessage { Result = "Ok", Message = "Success" } };
		}
		public ActionResult Remove(int id) {
			if (id == 0) { return InputIsZeroForId(); }
			Parent parent = db.Parents.Find(id);
			db.Parents.Remove(parent);
			db.SaveChanges();
			return new JsonNetResult { Data = new JsonReturnMessage { Result = "Ok", Message = "Success" } };
		}
		private ActionResult InputIsNullOrEmpty() {
			return new JsonNetResult { Data = new JsonReturnMessage { Result = "Error", Message = "Input is NULL or Empty!" } };
		}
		private ActionResult InputIsZeroForId() {
			return new JsonNetResult { Data = new JsonReturnMessage { Result = "Error", Message = "Input is Zero for Id!" } };
		}


		#region MVC methods
		// GET: Parents
		public ActionResult Index()
        {
            return View(db.Parents.ToList());
        }

        // GET: Parents/Details/5
        public ActionResult Details(int? id)
        {
            if (id == null)
            {
                return new HttpStatusCodeResult(HttpStatusCode.BadRequest);
            }
            Parent parent = db.Parents.Find(id);
            if (parent == null)
            {
                return HttpNotFound();
            }
            return View(parent);
        }

        // GET: Parents/Create
        public ActionResult Create()
        {
            return View();
        }

        // POST: Parents/Create
        // To protect from overposting attacks, please enable the specific properties you want to bind to, for 
        // more details see https://go.microsoft.com/fwlink/?LinkId=317598.
        [HttpPost]
        [ValidateAntiForgeryToken]
        public ActionResult Create([Bind(Include = "Id,Name,Address,City,State,Zip,Active,DateCreated,DateUpdated")] Parent parent)
        {
            if (ModelState.IsValid)
            {
                db.Parents.Add(parent);
                db.SaveChanges();
                return RedirectToAction("Index");
            }

            return View(parent);
        }

        // GET: Parents/Edit/5
        public ActionResult Edit(int? id)
        {
            if (id == null)
            {
                return new HttpStatusCodeResult(HttpStatusCode.BadRequest);
            }
            Parent parent = db.Parents.Find(id);
            if (parent == null)
            {
                return HttpNotFound();
            }
            return View(parent);
        }

        // POST: Parents/Edit/5
        // To protect from overposting attacks, please enable the specific properties you want to bind to, for 
        // more details see https://go.microsoft.com/fwlink/?LinkId=317598.
        [HttpPost]
        [ValidateAntiForgeryToken]
        public ActionResult Edit([Bind(Include = "Id,Name,Address,City,State,Zip,Active,DateCreated,DateUpdated")] Parent parent)
        {
            if (ModelState.IsValid)
            {
                db.Entry(parent).State = EntityState.Modified;
                db.SaveChanges();
                return RedirectToAction("Index");
            }
            return View(parent);
        }

        // GET: Parents/Delete/5
        public ActionResult Delete(int? id)
        {
            if (id == null)
            {
                return new HttpStatusCodeResult(HttpStatusCode.BadRequest);
            }
            Parent parent = db.Parents.Find(id);
            if (parent == null)
            {
                return HttpNotFound();
            }
            return View(parent);
        }

        // POST: Parents/Delete/5
        [HttpPost, ActionName("Delete")]
        [ValidateAntiForgeryToken]
        public ActionResult DeleteConfirmed(int id)
        {
            Parent parent = db.Parents.Find(id);
            db.Parents.Remove(parent);
            db.SaveChanges();
            return RedirectToAction("Index");
        }
#endregion MVC Methods
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
