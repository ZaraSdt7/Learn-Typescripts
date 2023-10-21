import { MongoClient } from "mongodb";


class History {
    constructor(private client: MongoClient) {}
  
    // افزودن یک رکورد جدید به مجموعه داده
    addRecord(expression: string, result: number): void {
      const db = this.client.db("calculator");
      const collection = db.collection("history");
  
      collection.insertOne({
        expression,
        result,
      });
    }
  
    // دریافت تمام رکوردهای مجموعه داده
    getRecords(): Promise<any[]> {
      const db = this.client.db("calculator");
      const collection = db.collection("history");
  
      return collection.find().toArray();
    }
  }
  
  
class Calculator {
  constructor(private client: MongoClient) {}

  // افزودن یک رکورد جدید به مجموعه داده
  addRecord(expression: string, result: number): void {
    const db = this.client.db("calculator");
    const collection = db.collection("records");

    collection.insertOne({
      expression,
      result,
    });
  }

  // دریافت تمام رکوردهای مجموعه داده
  getRecords(): Promise<any[]> {
    const db = this.client.db("calculator");
    const collection = db.collection("records");

    return collection.find().toArray();
  }

  // افزودن یک رکورد جدید به مجموعه داده تاریخچه
  addRecordToHistory(expression: string, result: number): void {
    const history = new History(this.client);
    history.addRecord(expression, result);
  }

  // دریافت تمام رکوردهای مجموعه داده تاریخچه
  getRecordsFromHistory(): Promise<any[]> {
    const history = new History(this.client);
    return history.getRecords();
  }
}

async function displayHistory(calculator: Calculator): Promise<void> {
    const records = await calculator.getRecordsFromHistory();
  
    console.log("تاریخچه محاسبات:");
    for (const record of records) {
      console.log(`${record.expression} = ${record.result}`);
    }
  }
  