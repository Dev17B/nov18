let express = require('express');
let router = express.Router();
let mongoose = require('mongoose');
// connect witht note model 
let Note = require('../models/note');

module.exports.displayNotetaker = (req,res,next)=>{
    Note.find((err, notetaker)=>{
        if (err)
        {
            return console.error(err);
        }
        else
        {
            res.render('note/list',
            {
                title:'Notes section', 
                Notetaker: notetaker
            })
        }
    });
}

module.exports.displayAddPage = (req,res,next)=>{
    res.render('note/add',{title:'Add your note'})

}

module.exports.processAddPage = (req,res,next)=>{
    let newNote = Note ({
        "notename": req.body.notename,
        "date": req.body.date,
        "description": req.body.description,
        "additionalnote": req.body.additionalnote
    })
    Note.create(newNote,(err,Note) => {
        if(err)
        {
            console.log(err);
            res.end(err);

        }
        else
        {
            res.redirect('/note-taker');
        }
    })
    
}

module.exports.displayEditPage = (req,res,next)=> {
    let id = req.params.id;
    Note.findById(id,(err,noteToEdit) => {
        if(err)
        {
            console.log(err);
            res.end(err);

        }
        else
        {
            res.render('note/edit',{title:'Edit section', note:noteToEdit});
        }
    });
}

module.exports.processEditPage = (req,res,next)=> {
    let id=req.params.id;
    let updateNote = Note ({
        "_id":id,
        "notename": req.body.notename,
        "date": req.body.date,
        "description": req.body.description,
        "additionalnote": req.body.additionalnote
    });
    Note.updateOne({_id:id}, updateNote,(err) =>{
        if(err)
        {
            console.log(err);
            res.end(err);
        }
        else
        {
            res.redirect('/note-taker');
        }
    });
}

module.exports.performDelete = (req,res,next)=>{
    let id =req.params.id;
    Note.deleteOne({_id:id},(err)=>{
        if(err)
        {
            console.log(err);
            res.end(err);
        }
        else
        {
            res.redirect('/note-taker');
        }
    });
}
