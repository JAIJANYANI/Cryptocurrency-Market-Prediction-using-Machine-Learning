import pandas as pd 
import numpy as np 
import matplotlib.pyplot as plt 
from flask import Flask , redirect , url_for , request , render_template , jsonify , json

app = Flask(__name__, template_folder='html/')

@app.route("/")
def btc():
    # df = pd.read_csv('app/data/crypto.csv')
    # df2 = pd.read_csv('app/data/predict.csv')

    # X = pd.DataFrame(df['ID'])
    # y = pd.DataFrame(df['BitCoin_Price'])
    # Z = pd.DataFrame(df2['ID2'])

    # from sklearn.linear_model import LinearRegression
    # lin_reg = LinearRegression()
    # lin_reg.fit(X, y)

    # from sklearn.preprocessing import PolynomialFeatures
    # poly_reg = PolynomialFeatures(degree = 4)
    # X_poly = poly_reg.fit_transform(X)
    # poly_reg.fit(X_poly, y)
    # lin_reg_2 = LinearRegression()
    # lin_reg_2.fit(X_poly, y)
    # print("------------------------------------------")
    # print("------------------------------------------")

    # print ("Predicting BitCoin Price for next 15 days")
    # test1 = (pd.DataFrame(lin_reg_2.predict(poly_reg.fit_transform(Z)) , columns = ['Price']))
    # print (pd.DataFrame(lin_reg_2.predict(poly_reg.fit_transform(Z)) , columns = ['Price']))
    # print("------------------------------------------")
    # print("------------------------------------------")

    # print(test1)
    # df2['BitCoin_Price'] = test1
    # print(df2)

    # df2.to_csv('static/data/result.csv')
    
    #*****************************************
    #return 'Predicting BitCoin Price for next 15 days....%s' % test
    # return  '<h1>Predicting BitCoin Price for next 15 days</h1><br><br><h3><h3>{}</h3></h3></><br/><br/>'.format(test1)
    return render_template('btc.html')

@app.route("/eth")
def eth():
	return render_template('eth.html')

@app.route("/xrp")
def xrp():
	return render_template('xrp.html')

if __name__ == '__main__':
    app.run(debug = True)
    