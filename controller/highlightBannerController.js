const Product = require('../database/model/productModel')

exports.highligthProduct = async (req,res) => {
	try {
		const highligthData = await Product.find({}, "_id name summary image").exec()
		let arrData = []
		let randomNumb = Math.floor(Math.random()*(highligthData.length-2))
		for (i=0; i<3; i++) {
			arrData.push(highligthData[randomNumb+i])
		}
		
		res.status(200).send({
			statusCode: 200,
			statusText: "OK",
			message: "Successfully retrieve the highlight product",
			result: arrData,
		})
	} catch (error) {
		console.log(error);
		res.status(500).send({
			statusCode: 500,
			statusText: "Internal Server Error",
			message: "Failed to get the highligth product",
		})
	}
}

exports.bannerProduct = async (req,res) => {
	try {
		const bannerData = await Product.find({}, "_id code name image description").exec()
		const randomNumber = Math.floor(Math.random()*bannerData.length)

		res.status(200).send({
			statusCode: 200,
			statusText: "OK",
			message: "Successfully retrieve banner product data",
			result: bannerData[randomNumber],
		})
	} catch (error) {
		console.log(error)
		res.status(500).send({
			statusCode: 500,
			statusText: "Internal Server Error",
			message: "Failed to get banner product"
		})
	}
}