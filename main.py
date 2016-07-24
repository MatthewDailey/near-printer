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

from google.appengine.api import users
from google.appengine.ext import ndb

JINJA_ENVIRONMENT = jinja2.Environment(
      loader=jinja2.FileSystemLoader(os.path.dirname(__file__)),
      extensions=['jinja2.ext.autoescape'],
      autoescape=True)


# [START Page rendering]
def reactTemplate():
	return JINJA_ENVIRONMENT.get_template('index.html')

class MainHandler(webapp2.RequestHandler):
  def get(self):
    self.response.write(reactTemplate().render({"reactApplicationJs": "public/app.bundle.js"}))

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
            "simpleContent" : "You must be an admin to access this page."}))
    else:
      loginUrl = users.create_login_url(self.request.uri)
      self.response.write(reactTemplate().render({
          "reactApplicationJs": "public/simpleContent.bundle.js",
          "loginUrl" : loginUrl,
          "simpleContent" : "Please login."}))
# [END Page rendering]

app = webapp2.WSGIApplication([
    ('/', MainHandler),
    ('/newPrinter', NewPrinter)
], debug=True)
