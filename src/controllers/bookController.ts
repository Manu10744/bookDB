import { Request, Response } from "express";
import Book from "./../book";

// - GET - /books           # returns all books
export let allBooks = (req: Request, res: Response) => {
    Book.find({}).exec((err: any, books: any) => {
        console.log(books);
        if (err) throw err;
        res.render("books.ejs", { data: books });
    })
}

// - GET - /book/{1}        # returns book with id 1
export let getBook = (req: Request, res: Response) => {
    Book.findById(req.params.id, (err: any, book: any) => {
        if (err) {
            res.send(err);
        } else {
            res.send(book);
        }
    })
}

// - PUT - /book            # inserts a new book into the table
export let addBook = (req: Request, res: Response) => {
    console.log("TITLE: " + req.body.title);
    console.log("AUTHOR: " + req.body.author);
    let book = Book.create({
        "title": req.body.title,
        "author": req.body.author,
        "releaseYear": req.body.releaseYear,
        "publisher": req.body.publisher,
        "pages": req.body.pages,
        "cover": req.body.cover,
        "rating": {
            "author": "Manuel Neumayer",
            "ratingValue": 4,
            "comment": "Very, very cool! I enjoyed it!"
        }
     });

    res.redirect("/");
}

// - DELETE - /book/{1}     # deletes a book with id of 1
export let deleteBook = (req: Request, res: Response) => {
    Book.deleteOne({ _id: req.params.id }, (err: any) => {
        if (err) {
            res.send(err);
        } else {
            res.redirect("/books");
        }
    })
}

// - POST - /book/{1}       # updates a book with id of 1
export let updateBook = (req: Request, res: Response) => {
    Book.findByIdAndUpdate(req.params.id, req.body, (err: any, book:any) => {
        if (err) {
            res.send(err);
        } else {
            res.redirect("/");
        }
    })
}