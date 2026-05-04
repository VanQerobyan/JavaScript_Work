// Աննկատ վիճակագրության հավաքագրիչ (Proxy + WeakMap)
// Ինչ անել. Գրեք trackAccess(obj) ֆունկցիա, որը փոխանցված օբյեկտը կփաթեթավորի Proxy-ում: 
// Ամեն անգամ, երբ որևէ հատկություն կարդացվում է այս proxy-ի միջոցով, մուտքի հաշվիչը պետք է մեծանա: 
// Հաշվիչն ինքնին պետք է պահվի գլոբալ WeakMap-ում, որտեղ բանալին սկզբնական օբյեկտն է:
// Ինչու է այն անհրաժեշտ. Տրամաբանության տարանջատման հզոր հայեցակարգ: Մենք սովորում ենք ընդհատել օբյեկտի վրա գործողությունները (Proxy-ի միջոցով)
//  և պահպանել դրան կապված մետատվյալները (WeakMap-ի միջոցով)՝ լիովին անտեսանելի լինելով օբյեկտի և արտաքին կոդի համար:





// Input

let weakMap = new WeakMap();

function trackAccess(obj) {

    weakMap.set(obj, 0);

    let proxyObj = new Proxy(obj, {
        get(target, prop) {
            let count = weakMap.get(target);
            weakMap.set(target, count + 1);
            return target[prop];
        }
    });
    return proxyObj;
}

function getStats(obj) {
    return weakMap.get(obj);
}


const original = { a: 1, b: 2 };
const proxy = trackAccess(original);


// Actions (reading properties via proxy):
console.log(proxy.a);
console.log(proxy.b);
console.log(proxy.a);

// Expected Output
console.log(getStats(original)); 
// 3

