import pandas as pd

irr_africa = pd.read_csv('daily_horizontal_irradiation.csv', sep=',')

Jan = pd.DataFrame()
Feb = pd.DataFrame()
Mar = pd.DataFrame()
Apr = pd.DataFrame()
May = pd.DataFrame()
Jun = pd.DataFrame()
Jul = pd.DataFrame()
Aug = pd.DataFrame()
Sep = pd.DataFrame()
Oct = pd.DataFrame()
Nov = pd.DataFrame()
Dec = pd.DataFrame()
index = range(-17,52)
length_row = len(index)
latitudes = len(irr_africa.Jan)/6

for i in range(71):
    print(i)
    first = length_row * i
    second = length_row * (i+1)
    row = irr_africa.Jan[first : second]
    row = pd.Series(row.values, index=index)
    Jan = Jan.append(row, ignore_index=True)
    
Jan.to_csv('jan.csv')

for i in range(71):
    print(i)
    first = length_row * i
    second = length_row * (i+1)
    row = irr_africa.Feb[first : second]
    row = pd.Series(row.values, index=index)
    Feb = Feb.append(row, ignore_index=True)
    
Feb.to_csv('feb.csv')

print('Jan')
for i in range(71):
    print(i)
    first = length_row * i
    second = length_row * (i+1)
    row = irr_africa.Mar[first : second]
    row = pd.Series(row.values, index=index)
    Mar = Mar.append(row, ignore_index=True)
    
Mar.to_csv('mar.csv')

print('Jan')
for i in range(71):
    print(i)
    first = length_row * i
    second = length_row * (i+1)
    row = irr_africa.Apr[first : second]
    row = pd.Series(row.values, index=index)
    Apr = Apr.append(row, ignore_index=True)
    
Apr.to_csv('apr.csv')

print('Jan')
for i in range(71):
    print(i)
    first = length_row * i
    second = length_row * (i+1)
    row = irr_africa.May[first : second]
    row = pd.Series(row.values, index=index)
    May = May.append(row, ignore_index=True)
    
May.to_csv('may.csv')

print('Jan')
for i in range(71):
    print(i)
    first = length_row * i
    second = length_row * (i+1)
    row = irr_africa.Jun[first : second]
    row = pd.Series(row.values, index=index)
    Jun = Jun.append(row, ignore_index=True)
    
Jun.to_csv('june.csv')

print('Jan')
for i in range(71):
    print(i)
    first = length_row * i
    second = length_row * (i+1)
    row = irr_africa.Jul[first : second]
    row = pd.Series(row.values, index=index)
    Jul = Jul.append(row, ignore_index=True)
    
Jul.to_csv('july.csv')

print('Jan')
for i in range(71):
    print(i)
    first = length_row * i
    second = length_row * (i+1)
    row = irr_africa.Aug[first : second]
    row = pd.Series(row.values, index=index)
    Aug = Aug.append(row, ignore_index=True)
    
Aug.to_csv('aug.csv')

print('Sep')
for i in range(71):
    print(i)
    first = length_row * i
    second = length_row * (i+1)
    row = irr_africa.Sep[first : second]
    row = pd.Series(row.values, index=index)
    Sep = Sep.append(row, ignore_index=True)
    
Sep.to_csv('sep.csv')

print('Oct')
for i in range(71):
    print(i)
    first = length_row * i
    second = length_row * (i+1)
    row = irr_africa.Oct[first : second]
    row = pd.Series(row.values, index=index)
    Oct = Oct.append(row, ignore_index=True)
    
Oct.to_csv('oct.csv')

print('Nov')
for i in range(71):
    print(i)
    first = length_row * i
    second = length_row * (i+1)
    row = irr_africa.Nov[first : second]
    row = pd.Series(row.values, index=index)
    Nov = Nov.append(row, ignore_index=True)
    
Nov.to_csv('nov.csv')

print('Dec')
for i in range(71):
    print(i)
    first = length_row * i
    second = length_row * (i+1)
    row = irr_africa.Dec[first : second]
    row = pd.Series(row.values, index=index)
    Dec = Dec.append(row, ignore_index=True)
    
Dec.to_csv('dec.csv')