import { format } from "../";

const dirty_test_dart_code = `const container = Container(child: Container(child: Text("LO\\nFI",
style: TextStyle(color: Colors.white,fontSize: 36,fontWeight: FontWeight.w700,fontFamily: "Helvetica",),),
width: 144,
height: 144,
decoration: BoxDecoration(color: Colors.black,borderRadius: BorderRadius.circular(8,),),),
width: MediaQuery.of(context).size.width,);`;

const formatted = `const container = Container(
  child: Container(
    child: Text(
      "LO\\nFI",
      style: TextStyle(
        color: Colors.white,
        fontSize: 36,
        fontWeight: FontWeight.w700,
        fontFamily: "Helvetica",
      ),
    ),
    width: 144,
    height: 144,
    decoration: BoxDecoration(
      color: Colors.black,
      borderRadius: BorderRadius.circular(
        8,
      ),
    ),
  ),
  width: MediaQuery.of(context).size.width,
);
`;

test("api call test", async () => {
    expect(
        await format({
            code: dirty_test_dart_code,
            lang: "dart",
        })
    ).toBe(formatted);
});
