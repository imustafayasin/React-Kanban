import crypto from 'crypto';

class User {
    id = crypto.randomUUID();
    email = '';
    passport = ""
    fullName = "";
    googleId = ""
    boards = []
    createdAt = new Date;

    constructor(email, passport) {
        this.email = email;
        this.passport = passport;
        this.fullName = email.split("@").shift()
    }

    addBoard(board) {
        this.boards.push(board);
    }
}

User.prototype.getFullName = function () {
    return this.fullName
};

class Board {
    id = crypto.randomUUID();
    name = "";
    userId = "";
    createdAt = new Date;
    Tasks = []

    constructor(userId, name) {
        this.name = name;
        this.userId = userId
    }

    addTask(task) {
        this.Tasks.push(task);
    }
}


class Task {
    id = crypto.randomUUID();
    name = "";
    description = "";
    boardId = "";
    createdAt = new Date;
    constructor(name, description, boardId) {
        this.name = name;
        this.description = description;
        this.boardId = boardId;
    }
}


var yasin = new User("yasin@limunis.com", "12345")

var board = new Board(yasin.id, 'Doing');

var board_2 = new Board(yasin.id, 'To do');
board.addTask(new Task("Deploy product", "Description", board.id));

yasin.addBoard(board)
yasin.addBoard(board_2)


console.log(yasin)

