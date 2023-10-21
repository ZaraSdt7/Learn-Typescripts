 export default class Histories {
    private items: string[] = [];

    addEntry(entry: string): void {
        this.items.push(entry);
    }

    getEntries(): string[] {
        return this.items;
    }
}