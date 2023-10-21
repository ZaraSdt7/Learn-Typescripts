
export default class Calculators {
    private currentInput: string = "";
    private history: string[] = [];

    addDigit(digit: string): void {
        this.currentInput += digit;
    }

    clearInput(): void {
        this.currentInput = "";
    }

    calculate(): string {
        try {
            const result = eval(this.currentInput);
            this.history.push(`${this.currentInput} = ${result}`);
            this.clearInput();
            return result.toString();
        } catch (error) {
            return "Error";
        }
    }

    getHistory(): string[] {
        return this.history;
    }
}





