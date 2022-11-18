let express = require('express');
let router = express.Router();
let mongoose = require('mongoose');
// connect witht note model 

let Note = require('../models/note');
let noteController = require('../controller/note');

/* read operation 
get route for the note list*/

router.get('/',noteController.displayNotetaker);


/* add operation 
Get route for displaying the add page  -- create operation */
router.get('/add', noteController.displayAddPage);
/* post route for processing  the add page -- create operation  */
router.post('/add',noteController.processAddPage);

/* edit operation 
Get route for displaying the edit operation -- update operation */
router.get('/edit/:id',noteController.displayEditPage);
/*post route for displaying  the edit operation -- update operation  */
router.post('/edit/:id',noteController.processEditPage);
/* delete operation */
/* Get to perform delete operation -- update Deletion */

router.get('/delete/:id',noteController.performDelete);
/* Get to perform delete operation -- update Deletion */

module.exports=router;
