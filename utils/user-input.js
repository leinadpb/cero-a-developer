const readline = require('readline');

const getUserInput = async (question) => {
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    })

    return new Promise((resolve, reject) => {
        try {
            rl.question(question, (num) => {
                resolve(num)

                rl.close()
            })
        } catch (e) {
            reject(e);
        }
    })
}

module.exports = getUserInput;