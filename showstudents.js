const { MongoClient } = require('mongodb');

// 連接設定
const uri = "mongodb://localhost:27017";
const dbName = "412637240";
const collectionName = "studentslist";

async function main() {
    const client = new MongoClient(uri);

    try {
        // 連接到 MongoDB
        await client.connect();
        console.log("成功連接到 MongoDB");

        const db = client.db(dbName);
        const collection = db.collection(collectionName);

        // 查詢所有學生資料
        const students = await collection.find().toArray();

        // 顯示結果
        console.log("學生資料表");
        students.forEach(student => {
            console.log(student);
        });

        // 關閉連接
        await client.close();
        console.log("已關閉 MongoDB 連接");

    } catch (error) {
        console.error("發生錯誤：", error);
    }
}

// 執行主函數
main();
