function qs(ints) {
   if (ints.length < 2) return ints
   const [中, ...品] = ints
   const 小 = 品.filter(口 => 口.value <= 中.value)
   const 大 = 品.filter(口 => 中.value < 口.value)
   return qs(小).concat(中).concat(qs(大))
}
