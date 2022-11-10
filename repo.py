import matplotlib.pyplot as plt
import datetime

files = {
  r'.\src\App.js',
  r'.\src\Components.js',
  r'.\src\Basics.js',
  r'.\src\Applications.js',
  r'.\src\MultipleInt.js',
  r'.\src\VectorInt.js',
  r'.\src\Techniques.js',
  r'.\src\global.css',
  r'.\src\math.css',
  r'.\src\solo.css',
}
f= open('repo.html', 'r',encoding='utf-8').read()
lines = 0
initial = ""
for file in files:
  content = open(file, 'r',encoding='utf-8').read()
  initial += content
  for char in content:
    if char == "\n":
      lines += 1

records = [
  272416,
  302782,
  351940,
  470130,
  1190770,
  597732
]
dates = [
  [10, 28],
  [10, 29],
  [10, 30],
  [10, 31],
  [11, 1],
  [11, 2],
]
dates_data = [datetime.datetime(2022, date[0],date[1]) for date in dates]
print(dates_data)
plt.plot_date(dates_data[:len(records)], records, linestyle ='solid')
plt.tight_layout()
#plt.show()
print(len(initial))
print(lines)
""" print(len(f)) """
""" print('auto created code percent = ' , (len(f)/len(initial) * 100)) """
#  1406.69 %
#  3207.72 %
#  1610.18 %
