#!/usr/bin/env python
#
# Copyright 2007 Google Inc.
#
# Licensed under the Apache License, Version 2.0 (the "License");
# you may not use this file except in compliance with the License.
# You may obtain a copy of the License at
#
#     http://www.apache.org/licenses/LICENSE-2.0
#
# Unless required by applicable law or agreed to in writing, software
# distributed under the License is distributed on an "AS IS" BASIS,
# WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
# See the License for the specific language governing permissions and
# limitations under the License.
#
import webapp2
import jinja2
import os
import json

from google.appengine.api import users
from google.appengine.ext import ndb

JINJA_ENVIRONMENT = jinja2.Environment(
      loader=jinja2.FileSystemLoader(os.path.dirname(__file__)),
      extensions=['jinja2.ext.autoescape'],
      autoescape=True)

class Printer(ndb.Model):
  title = ndb.StringProperty(indexed=False)
  cost = ndb.StringProperty(indexed=False)
  hours = ndb.StringProperty(indexed=False)
  phone = ndb.StringProperty(indexed=False)
  url = ndb.StringProperty(indexed=False)
  lat = ndb.FloatProperty(indexed=False)
  lon = ndb.FloatProperty(indexed=False)

class RecordNewPrinterHandler(webapp2.RequestHandler):
  def get(self):
    if users.is_current_user_admin():
      newPrinter = Printer()
      newPrinter.title = self.request.get('title')
      if newPrinter.title == '':
        raise "No title"
      newPrinter.cost = self.request.get('cost')
      if newPrinter.cost == '':
        raise "No cost"
      newPrinter.hours = self.request.get('hours')
      if newPrinter.hours == '':
        raise "No hours"
      newPrinter.phone = self.request.get('phone')
      if newPrinter.phone == '':
        raise "No phone"
      newPrinter.url = self.request.get('url')
      if newPrinter.url == '':
        raise "No url"
      newPrinter.lat = float(self.request.get('lat'))
      newPrinter.lon = float(self.request.get('lon'))
      newPrinter.put()
      self.redirect("/newPrinter")
    else:
      raise "Log in as admin"

class GetPrintersHandler(webapp2.RequestHandler):
  def get(self):
    allPrinters = []
    for printer in Printer.query().fetch(100):
      allPrinters += [{"title" : printer.title, "cost" : printer.cost, "hours": printer.hours, "phone": printer.phone, "lat": printer.lat, "lon":printer.lon, "url":printer.url}]
    self.response.out.write(json.dumps(allPrinters))

# [START Page rendering]
def reactTemplate():
	return JINJA_ENVIRONMENT.get_template('index.html')

class MainHandler(webapp2.RequestHandler):
  def get(self):
    self.response.write(reactTemplate().render({"reactApplicationJs": "public/app.bundle.js"}))

class PrintRequest(webapp2.RequestHandler):
  def get(self):
    self.response.write(reactTemplate().render({"reactApplicationJs": "public/printRequest.bundle.js"}))

class NewPrinter(webapp2.RequestHandler):
  def get(self):
    user = users.get_current_user()
    if user:
      logoutUrl = users.create_logout_url(self.request.uri)
      if users.is_current_user_admin():
        self.response.write(reactTemplate().render({
            "reactApplicationJs": "public/newPrinter.bundle.js",
            "logoutUrl" : logoutUrl}))
      else:
        self.response.write(reactTemplate().render({
            "reactApplicationJs": "public/simpleContent.bundle.js",
            "logoutUrl" : logoutUrl,
            "simpleContent" : "You must be an admin to add a public printer."}))
    else:
      loginUrl = users.create_login_url(self.request.uri)
      self.response.write(reactTemplate().render({
          "reactApplicationJs": "public/simpleContent.bundle.js",
          "loginUrl" : loginUrl,
          "simpleContent" : "Please login to add a new public printer."}))
# [END Page rendering]

app = webapp2.WSGIApplication([
    ('/', MainHandler),
    ('/newPrinter', NewPrinter),
    ('/easyPrint', PrintRequest),
    ('/recordNewPrinter', RecordNewPrinterHandler),
    ('/getPrinters', GetPrintersHandler)
], debug=True)
