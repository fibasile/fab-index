import csv
import sys
import json
with open('students.csv','rb') as csvfile:
        items = []
	reader = csv.DictReader(csvfile)
     	for row in reader:
		items.append(row)
	print json.dumps(items)

