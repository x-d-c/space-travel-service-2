//
// For guidance on how to create routes see:
// https://prototype-kit.service.gov.uk/docs/create-routes
//

const govukPrototypeKit = require('govuk-prototype-kit')
const router = govukPrototypeKit.requests.setupRouter()

// Add your routes here

// Run this code when a form is submitted to 'destination-answer'
router.post('/destination-answer', function (req, res) {

  // Make a variable and give it the value from 'destination'
  var destination = req.session.data['destination']

  // Check whether the variable matches a condition
  if (destination == "moon" || destination == "mars") {
    // Send user to next page
    res.redirect('/full-name')
  } else {
    // Send user to ineligible page
    res.redirect('/ineligible')
  }

})
