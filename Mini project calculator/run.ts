// index.ts
import Calculators from './calculation';
import Histories from './history';

const calculator = new Calculators();
const history = new Histories();

const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

function displayMenu() {
    console.log("Welcome to the Calculator App!");
    console.log("1. Add digit");
    console.log("2. Clear input");
    console.log("3. Calculate");
    console.log("4. Show history");
    console.log("5. Exit");
}

async function main() {
    displayMenu();

    while (true) {
        const choice = await askQuestion("Enter your choice: " );
        switch (choice) {
            case "1":
                const digit = await askQuestion("Enter a digit: ");
                calculator.addDigit(digit);
                break;
            case "2":
                calculator.clearInput();
                break;
            case "3":
                const result = calculator.calculate();
                console.log(`Result: ${result}`);
                history.addEntry(result);
                break;
            case "4":
                const historyItems = history.getEntries();
                console.log("History:");
                historyItems.forEach((item, index) => console.log(`${index + 1}. ${item}`));
                break;
            case "5":
                console.log("Goodbye!");
                process.exit(0);
            default:
                console.log("Invalid choice. Please try again.");
        }
    }
}

function askQuestion(question: string): Promise<string> {
    return new Promise((resolve) => {
        readline.question(question, resolve);
    });
}

main();
