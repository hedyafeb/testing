class AuthorController {
    static add(first_name, last_name, religion, gender, age) {
        Author.create({
            first_name: first_name, // bisa jadi first_name aja
            last_name: last_name,
            religion: religion,
            gender: gender,
            age: Number(age)
        })
        .then(() => {
            View.print(`Success create author ${first_name} ${last_name}`) 
        })
        .catch((err) => {
            View.print(err);
        })
    }

    static read_one(id) {
        Author.findOne({
            where: {id: id},
            raw: true
        })
        .then(content => {
            View.print(content)
        })
        .catch((err) => {
            View.print(err)
        })
    }

    static read_all() {
        Author.findAll({
            raw: true
        })
        .then(content => {
            View.print(content)
        })
        .catch((err) => {
            View.print(err)
        })
    }

    static update(column, value, id) {
        Author.update(
            {[column]: value}, 
            {where: {id} }// ini sbnernya id: id
        )
        .then(content => {
            View.print(content)
        })
        .catch((err) => {
            View.print(err)
        })
    }

    static delete(id) {
        Author.destroy({
            where: {id: id}
        })
        .then(content => {
            View.print(`Data ${content} has been deleted`)
        })
        .catch((err) => {
            View.print(err)
        })
    }

}