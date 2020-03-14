import pymongo
import datetime
import pandas as pd
from pandas import ExcelWriter
from pandas import ExcelFile

myclient = pymongo.MongoClient(
    "mongodb://root:A260196r.@logikal-shard-00-00-iilvr.gcp.mongodb.net:27017,logikal-shard-00-01-iilvr.gcp.mongodb.net:27017,logikal-shard-00-02-iilvr.gcp.mongodb.net:27017/test?ssl=true&replicaSet=logikal-shard-0&authSource=admin&retryWrites=true&w=majority")

mydb = myclient["meetee05"]
users = mydb["names"]

data = pd.read_excel('c:/Users/aviram7168/meetee05/python/users2.xlsx')
print(data)
print("---------------")
print(data.columns)

print("---------------")

for index,x in data.iterrows():
    users.update(
        {"heb":x[0]},
        {
            "heb":x[0],
            "eng":x[1]
        },
        upsert=True  
    )


# # print(data["ליימ"])

# # for y in users.find():
# #     print(y)

