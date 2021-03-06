﻿using System;
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
    public class UsersController : Controller
    {
        private FirstTeachersContext db = new FirstTeachersContext();

		public ActionResult List() {
			return new JsonNetResult { Data = db.Users.ToList() };
		}
		public ActionResult Get(int id) {
			return new JsonNetResult { Data = db.Users.Find(id) };
		}
		public ActionResult Add(User user) {
			if(user.FirstName == null) { return InputIsNullOrEmpty(); }
			db.Users.Add(user);
			db.SaveChanges();
			return new JsonNetResult { Data = new JsonReturnMessage { Result = "Ok", Message = "Success" } };
		}
		public ActionResult Change(User user) {
			if (user.FirstName == null) { return InputIsNullOrEmpty(); }
			User aUser = db.Users.Find(user.Id);
			aUser.Clone(user);
			db.SaveChanges();
			return new JsonNetResult { Data = new JsonReturnMessage { Result = "Ok", Message = "Success" } };
		}
		public ActionResult Remove(int id) {
			if (id == 0) { return InputIsZeroForId(); }
			User user = db.Users.Find(id);
			db.Users.Remove(user);
			db.SaveChanges();
			return new JsonNetResult { Data = new JsonReturnMessage { Result = "Ok", Message = "Success" } };
		}
		private ActionResult InputIsNullOrEmpty() {
			return new JsonNetResult { Data = new JsonReturnMessage { Result = "Error", Message = "Input is NULL or Empty!" } };
		}
		private ActionResult InputIsZeroForId() {
			return new JsonNetResult { Data = new JsonReturnMessage { Result = "Error", Message = "Input is Zero for Id!" } };
		}

		#region MVC Default Actions
		// GET: Users
		public ActionResult Index()
        {
            return View(db.Users.ToList());
        }

        // GET: Users/Details/5
        public ActionResult Details(int? id)
        {
            if (id == null)
            {
                return new HttpStatusCodeResult(HttpStatusCode.BadRequest);
            }
            User user = db.Users.Find(id);
            if (user == null)
            {
                return HttpNotFound();
            }
            return View(user);
        }

        // GET: Users/Create
        public ActionResult Create()
        {
            return View();
        }

        // POST: Users/Create
        // To protect from overposting attacks, please enable the specific properties you want to bind to, for 
        // more details see https://go.microsoft.com/fwlink/?LinkId=317598.
        [HttpPost]
        [ValidateAntiForgeryToken]
        public ActionResult Create([Bind(Include = "Id,FirstName,LastName,UserName,Password,Email,Active,DateCreated,DateUpdated")] User user)
        {
            if (ModelState.IsValid)
            {
                db.Users.Add(user);
                db.SaveChanges();
                return RedirectToAction("Index");
            }

            return View(user);
        }

        // GET: Users/Edit/5
        public ActionResult Edit(int? id)
        {
            if (id == null)
            {
                return new HttpStatusCodeResult(HttpStatusCode.BadRequest);
            }
            User user = db.Users.Find(id);
            if (user == null)
            {
                return HttpNotFound();
            }
            return View(user);
        }

        // POST: Users/Edit/5
        // To protect from overposting attacks, please enable the specific properties you want to bind to, for 
        // more details see https://go.microsoft.com/fwlink/?LinkId=317598.
        [HttpPost]
        [ValidateAntiForgeryToken]
        public ActionResult Edit([Bind(Include = "Id,FirstName,LastName,UserName,Password,Email,Active,DateCreated,DateUpdated")] User user)
        {
            if (ModelState.IsValid)
            {
                db.Entry(user).State = EntityState.Modified;
                db.SaveChanges();
                return RedirectToAction("Index");
            }
            return View(user);
        }

        // GET: Users/Delete/5
        public ActionResult Delete(int? id)
        {
            if (id == null)
            {
                return new HttpStatusCodeResult(HttpStatusCode.BadRequest);
            }
            User user = db.Users.Find(id);
            if (user == null)
            {
                return HttpNotFound();
            }
            return View(user);
        }

        // POST: Users/Delete/5
        [HttpPost, ActionName("Delete")]
        [ValidateAntiForgeryToken]
        public ActionResult DeleteConfirmed(int id)
        {
            User user = db.Users.Find(id);
            db.Users.Remove(user);
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
