import matplotlib.pyplot as plt
import datetime

initial = open(r'.\src\App.js', 'r',encoding='utf-8').read() + open(r'.\src\Components.js', 'r',encoding='utf-8').read()+ open(r'.\src\global.css', 'r',encoding='utf-8').read()
f= open('repo.html', 'r',encoding='utf-8').read()

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
print(len(f))
print('auto created code percent = ' , (len(f)/len(initial) * 100))
#  1406.69 %
#  3207.72 %
#  1610.18 %
