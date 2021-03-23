function uniq(list) {
  let listWithoutDuplicates = [];
  for (let i = 0; i < list.length; i++) {
    if (listWithoutDuplicates.includes(list[i])) {
    } else {
      listWithoutDuplicates.push(list[i]);
    }
  }
  return listWithoutDuplicates;
}

export { uniq };
