import pandas as pd

temperatures = pd.read_csv("temperatures.csv", sep=",")

latitudes = range(48,34,-1)
longitudes = range(6,20)

jan = pd.DataFrame()
feb = pd.DataFrame()
mar = pd.DataFrame()
apr = pd.DataFrame()
may = pd.DataFrame()
jun = pd.DataFrame()
jul = pd.DataFrame()
aug = pd.DataFrame()
sep = pd.DataFrame()
octo = pd.DataFrame()
nov = pd.DataFrame()
dec = pd.DataFrame()

for b in range(len(latitudes)):
    latitude = latitudes[b]
    print(latitude)
    
    jan_row = []
    feb_row = []
    mar_row = []
    apr_row = []
    may_row = []
    jun_row = []
    jul_row = []
    aug_row = []
    sep_row = []
    octo_row = []
    nov_row = []
    dec_row = []

    for a in range(len(longitudes)):
        longitude = longitudes[a]
        print(longitude)
        areas = []

        for i in range(len(temperatures.Longitudine)):
            long_diff = longitude - temperatures.Longitudine[i]
            lat_diff = latitude - temperatures.Latitudine[i]
            area = abs(long_diff * lat_diff)
            areas.append(area)

        min_area = min(float(i) for i in areas)
        index = areas.index(min_area)

        jan_row.append(temperatures.Gennaio[index])
        feb_row.append(temperatures.Febbraio[index])
        mar_row.append(temperatures.Marzo[index])
        apr_row.append(temperatures.Aprile[index])
        may_row.append(temperatures.Maggio[index])
        jun_row.append(temperatures.Giugno[index])
        jul_row.append(temperatures.Luglio[index])
        aug_row.append(temperatures.Agosto[index])
        sep_row.append(temperatures.Settembre[index])
        octo_row.append(temperatures.Ottobre[index])
        nov_row.append(temperatures.Novembre[index])
        dec_row.append(temperatures.Dicembre[index])
        
    jan_row = pd.Series(jan_row, index=longitudes)
    jan = jan.append(jan_row, ignore_index=True)
    
    feb_row = pd.Series(feb_row, index=longitudes)
    feb = feb.append(feb_row, ignore_index=True)
    
    mar_row = pd.Series(mar_row, index=longitudes)
    mar = mar.append(mar_row, ignore_index=True)
    
    apr_row = pd.Series(apr_row, index=longitudes)
    apr = apr.append(apr_row, ignore_index=True)
    
    may_row = pd.Series(may_row, index=longitudes)
    may = may.append(may_row, ignore_index=True)
    
    jun_row = pd.Series(jun_row, index=longitudes)
    jun = jun.append(jun_row, ignore_index=True)
    
    jul_row = pd.Series(jul_row, index=longitudes)
    jul = jul.append(jul_row, ignore_index=True)
    
    aug_row = pd.Series(aug_row, index=longitudes)
    aug = aug.append(aug_row, ignore_index=True)
    
    sep_row = pd.Series(sep_row, index=longitudes)
    sep = sep.append(sep_row, ignore_index=True)
    
    octo_row = pd.Series(octo_row, index=longitudes)
    octo = octo.append(octo_row, ignore_index=True)
    
    nov_row = pd.Series(nov_row, index=longitudes)
    nov = nov.append(nov_row, ignore_index=True)
    
    dec_row = pd.Series(dec_row, index=longitudes)
    dec = dec.append(dec_row, ignore_index=True)

print('1')
print(jan)

print('2')
print(feb)

print('3')
print(mar)

print('4')
print(apr)

print('5')
print(may)

print('6')
print(jun)

print('7')
print(jul)

print('8')
print(aug)

print('9')
print(sep)

print('10')
print(octo)

print('11')
print(nov)

print('12')
print(dec)

confirm = raw_input("Save? Y or N ")

if confirm == "Y":
    jan.to_csv('temp1.csv')
    feb.to_csv('temp2.csv')
    mar.to_csv('temp3.csv')
    apr.to_csv('temp4.csv')
    may.to_csv('temp5.csv')
    jun.to_csv('temp6.csv')
    jul.to_csv('temp7.csv')
    aug.to_csv('temp8.csv')
    sep.to_csv('temp9.csv')
    octo.to_csv('temp10.csv')
    nov.to_csv('temp11.csv')
    dec.to_csv('temp12.csv')
    print("Done :D")
    
else:
    print("ok, bye :)")
    
    


