export default  function State({ items }) {
  if (!items.length)
    return (
      <p className="stats">
        <em>Start Adding some items to your packing list🚀</em>
      </p>
    );
  const total = items.length;
  const packedItems = items.filter(item => item.packed).length;
  const packedPercentage = total ? Math.round((packedItems / total) * 100) : 0;
  return <footer className="stats">
    <em>
      {packedPercentage === 100 ? "you got everything! Ready to go ✈️"
        : `💼 you have ${total} items on your list, and you already packed 
    ${packedItems} (${packedPercentage}%)`}
    </em>
  </footer>;
}
