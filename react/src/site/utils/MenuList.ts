export type MenuItem = {
	name: string
	link: string
}

const MenuList: Array<MenuItem> = [
	{
		name: "Каталог 2021",
		link: "/catalog"
	},
	{
		name: "О доставке",
		link: "/delivery"
	},
	{
		name: "Об оплате",
		link: "/payments"
	},
	{
		name: "О нас",
		link: "/about"
	},
	{
		name: "Контакты",
		link: "/contacts"
	}
]

export default MenuList;