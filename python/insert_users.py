import pymongo
import datetime
import pandas as pd
from pandas import ExcelWriter
from pandas import ExcelFile

myclient = pymongo.MongoClient(
    "mongodb://root:A260196r.@logikal-shard-00-00-iilvr.gcp.mongodb.net:27017,logikal-shard-00-01-iilvr.gcp.mongodb.net:27017,logikal-shard-00-02-iilvr.gcp.mongodb.net:27017/test?ssl=true&replicaSet=logikal-shard-0&authSource=admin&retryWrites=true&w=majority")

mydb = myclient["ovdim"]
users = mydb["users"]

data = pd.read_excel('c:/Users/aviram7168/OvdimProject/ovdim/python/true.xlsx')
print(data)
print("---------------")
print(data.columns)

print("---------------")

for index,x in data.iterrows():
#     print(x[0])
    print({
        "id":x[0],
        "lastname":x[1],
        "name":x[2],
        "role":x[3],
        "bigunit":x[4],
        "unit":x[5],
        "email":x[6],
        "phone":"0"+str(x[7])
    })
    users.update(
    {"id":x[0]},
    {
        "id":x[0],
        "lastname":x[1],
        "name":x[2],
        "role":x[3],
        "bigunit":x[4],
        "unit":x[5],
        "email":x[6],
        "phone":"0"+str(x[7]),
        "step":"0"
    },
     upsert=True  
    )
# print(data["ליימ"])

# for y in users.find():
#     print(y)

