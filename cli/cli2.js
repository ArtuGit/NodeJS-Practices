#!/usr/bin/env node

import axios from 'axios'
import chalk from 'chalk'

const url = "https://quotes.rest/qod"

// make a get request to the url
axios({
  method: 'get',
  url: url,
  headers: {'Accept': 'application/json'}, // this api needs this header set for the request
}).then(res => {
  const {quote, author} = res.data.contents.quotes[0]
  const log = chalk.green(`${quote} - ${author}`) // we use chalk to set the color green on successful response
  console.log(log)
}).catch(err => {
  const log = chalk.red(err) // we set the color red here for errors.
  console.log(log)
})