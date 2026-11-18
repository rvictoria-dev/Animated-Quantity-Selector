let quantity = 1;
const count = document.querySelector("#count");
const total = document.querySelector("#total");
function update(change) {
  quantity = Math.max(1, Math.min(20, quantity + change));
  count.textContent = quantity;
  total.textContent = "£" + (quantity * 8.5).toFixed(2);
  total.classList.remove("bump");
  void total.offsetWidth;
  total.classList.add("bump");
}
document.querySelector("#plus").onclick = () => update(1);
document.querySelector("#minus").onclick = () => update(-1);
