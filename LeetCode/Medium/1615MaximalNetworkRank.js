var maximalNetworkRank = function(n, roads) {
    let map = new Map();
    let count = 0;
    for(const [start, end] of roads){
        if(!map.has(start)){
            map.set(start, []);
        }
        if(!map.has(end)){
            map.set(end, [])
        }

        map.get(start).push(end)
        map.get(end).push(start)
    }

    for(let i = 0; i < n; i++){
        if(!map.has(i)) continue;

        for(let j = i+1; j < n; j++){
            if(!map.has(j)) continue;
            let arr1 = map.get(i)
            let arr2 = map.get(j)

            let total = arr1.length + arr2.length;

            if(arr1.includes(j)){
                total--;
            }
            count = Math.max(total, count)
        }
    }
    return count;
};

//Alternate using a set
const maximalNetworkRank = (n, roads) => {
    let map = new Map();
    let max = 0;
    for(const [start, end] of roads){
        if(!map.has(start)){
            map.set(start, new Set())
        }
        if(!map.has(end)){
            map.set(end, new Set())
        }
        map.get(start).add(end)
        map.get(end).add(start)
    }

    for(let i = 0; i < n; i++){
        if(!map.has(i)) continue;
        for(let j = i+1; j < n; j++){
            if(!map.has(j)) continue;

            let set1 = map.get(i)
            let set2 = map.get(j)

            let total = set1.size + set2.size;

            if(set1.has(j)){
                total--
            }
            max = Math.max(total, max)
        }
    }
    return max;
}

