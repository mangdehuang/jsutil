TS = {};
TS.util = {
	/**
	 * //使用原生js 判断是否有某个class
	 * @param {Object} dom  原生js dom
	 * @param {Object} str  要判断的类名
	 */
	hasClass:function(dom,str){
			var reg = new RegExp("\\b"+str+"\\b");
			return reg.test(dom.className);
	}
	
}
