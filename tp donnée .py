import sqlite3

c = sqlite3.connect("data1.db")
with c:
    cur= c.cursor()
    cur.execute("CREATE TABLE IF NOT EXISTS vélo (ID, Nom,Distance, Temps, Date ,lieu);")
