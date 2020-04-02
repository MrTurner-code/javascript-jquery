export class Book {
    constructor(title, author, description, pages,currentPage, read) {
        this.title = title;
        this.author = author;
        this.description = description;
        this.pages = pages;
        this.currentPage = currentPage;
        this.read = read;
    }
    readBook(page) {
        if (page < 1 || page > this.pages) {
            return 0;
        } else if (page >= 1 && page < this.pages) {
            this.currentPage += page;
        } else if(page == this.pages){
            this.read = true;
        }
    }
    
}
let bookOne = new Book('La horde du contrevent','Alain Damasio', "l'histoire d'une horde qui recherche l'origine du vent",'640', '0', false );
let bookTwo = new Book('Une saison en enfer', 'arthur raimbaud', 'recueil de poésie', '120', '0', false);
let bookThree = new Book('necronomicon', 'Abdul al-Hazred','livre des morts' ,'666','0', false  );

export const books = [];
books.push(bookOne,bookTwo,bookThree);
