import express, { Application, Request, Response } from "express";
import mongoose from "mongoose";
import * as bodyParser from "body-parser";
import * as bookController from "./controllers/bookController";
import Book from "./book";
import Comment from "./comment";

const methodOverride = require("method-override");
const app: Application = express();

// MongoDB
mongoose.connect("mongodb://localhost/typescriptapp", { useNewUrlParser: true });
mongoose.connection.once("open", () => {
    console.log("Connection with MongoDB Database has been established.")
});

// BodyParser
app.use(bodyParser.urlencoded({ extended: true }))
app.use(express.static(__dirname + "/public"));

// MethodOverride
app.use(methodOverride("_method"));

// Helper functions
app.locals = {
    calcAverageRatio: (book: any): String => {
        let avg: number = 0;
        book.rating.forEach((userRating: any) => {
            avg += userRating.ratingValue;
        });

        return (avg / book.rating.length).toFixed(2);
    }
};

app.set("views", __dirname + "/views");

app.get("/", (req: Request, res: Response) => {
    res.render("index.ejs");
});

app.get("/books/:id", (req: Request, res: Response) => {
    Book.findById(req.params.id).exec((err, book) => {
        if (err) throw err;
        res.render("book.ejs", { data: book});
    });
});

app.get("/books", bookController.allBooks);
app.get("/book/:id", bookController.getBook);
app.put("/book", bookController.addBook);
app.delete("/book/:id", bookController.deleteBook);

app.get("/edit/:id", (req: Request, res: Response) => {
    Book.findById(req.params.id).exec((err, book) => {
        if (err) throw err;
        res.render("edit.ejs", { data: book });
    });
});

app.post("/book/:id", bookController.updateBook);

// AJAX Call for posting and displaying comments 
app.post("/book/:id/comments/post", (req, res) => {
    console.log("ID : " + req.params.id);

    let comment = Comment.create({
        "author": req.body.author,
        "ratingValue": req.body.ratingValue,
        "comment": req.body.comment
    }, (err: any, commentDoc: any) => {
        Book.findByIdAndUpdate(req.params.id, {
            $push: {
                "rating": commentDoc
            }
        }, () => { 
            console.log("ADDED COMMENT TO BOOK!");

            // Send the new comment data as AJAX response
            res.send(commentDoc);
        })
    });
});

app.set("port", 3000);
app.listen(app.get("port"), (err: any) => {
    if (err) {
        console.log(err);
    } else {
        console.log("App is running on http://localhost:%d", app.get("port"));
    }
});