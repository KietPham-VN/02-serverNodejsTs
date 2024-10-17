const fullName: string = 'Phạm Anh Kiệt'
// có thể định nghĩa 1 kiểu dữ liệu mới
type Handle = () => Promise<string>

const handldF: Handle = () => Promise.resolve(fullName + 'ahihi')

handldF().then((value) => console.log(value))

const person: { name: string; age: number } = {
  name: 'Phạm Anh Kiêt',
  age: 21
}
