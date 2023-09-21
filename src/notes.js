/**TODO:
 * search form:
 * -- remove function to helper file
 *
 * Jobs page:
 *
 *
 * Job details page:
 * -- >> add search bar
 * / - unfiltered title w/ enter
 * / - unfiltered title w/ submit
 *
 * / - unfiltered title then add filter w/ submit
 * x - unfiltered title then add filter w/ enter
 *
 * / - unfiltered title then add both filters w/ submit
 * x - unfiltered title then add both filters w/ enter
 *
 * / - unfiltered title then add filter w/ submit then add filter w/ submit
 *
 * / - filter title/other w/ submit
 * x - filter title/other w/ enter
 *
 * / - filter other w/ submit
 * x - filter other w/ enter
 *
 * / - filter other/other w/ submit
 * x - filter other/other w/ enter
 *
 * x - filter all w/ submit, remove filters, then submit
 * x - filter all w/ submit, remove filters, then enter
 *
 * / - filter all w/ submit, undo other then submit
 * x - filter all w/ submit, undo other then enter
 *
 * / - filter all w/ submit, undo title then submit
 * x - filter all w/ submit, undo title then enter
 *
 * / - filter title/salary w/ submit, remove filters, undo title then submit --> salary not filtered
 * x - filter title/salary w/ submit, remove filters, undo title then enter
 *
 * x - filter title/equity w/ submit, remove filters, undo title then submit --> equity still filtered
 * x - filter title/equity w/ submit, remove filters, undo title then enter
 *
 * x - filter all w/ submit, remove filters, undo title then submit --> equity still filtered
 * x - filter all w/ submit, remove filters, undo title then enter
 *
 *
 *
 * Companies page
 *
 * Company details Page:
 * -- >> add search bar
 *
 *
 */








/**
 * 1. form submitted
 * 2. send to backend
 * 3. receive a token string
 * 4. set state with token string
 * 5. once set of state has finished, useEffect runs if token changed
 * 6. in use effect, decode token to get username
 * 7. use username to make a request to backend
 * 8. gives an object back with that user
 * 9. set current state in context for user
 */


