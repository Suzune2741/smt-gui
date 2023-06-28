/**
 * Define Ruby code generator for Sample2 Blocks
 * @param {RubyGenerator} Generator The RubyGenerator
 * @return {RubyGenerator} same as param.
 */
export default function (Generator) {

    //各ブロックに対応する Ruby コードを書く
    Generator.sample2_command0 = function () {
        return `sample2Command0\n`;
    };
    
    Generator.sample2_value0 = function () {
	const text = Generator.valueToCode(block, 'TEXT', Generator.ORDER_NONE) || null;
	return [`${text}`, Generator.ORDER_ATOMIC];
    };

    Generator.sample2_value1 = function () {
	const num  = Generator.valueToCode(block, 'NUM', Generator.ORDER_NONE)  || 0;
	return [`${num}`, Generator.ORDER_ATOMIC];
    };

    Generator.sample2_flag0 = function () {
	return ['sample2Flag0', Generator.ORDER_ATOMIC];
    };
       
    Generator.sample2_command1 = function (block) {
	const text = Generator.valueToCode(block, 'TEXT', Generator.ORDER_NONE) || null;
	const num  = Generator.valueToCode(block, 'NUM', Generator.ORDER_NONE)  || 0;
        return `sample2Command1(${text}, ${num})\n`;
    };

    Generator.sample2_command2 = function (block) {
	const text1 = Generator.valueToCode(block, 'TEXT1', Generator.ORDER_NONE) || null;
	const num  = Generator.valueToCode(block, 'NUM', Generator.ORDER_NONE)    || 0;
        return `sample2Command2.(${text1}, ${num})\n`;
    };

    Generator.sample2_command3 = function (block) {
	const text1 = Generator.valueToCode(block, 'TEXT1', Generator.ORDER_NONE) || null;
	const num1  = Generator.valueToCode(block, 'NUM1', Generator.ORDER_NONE)  || 0;	
        return `sample2Command3.${text1}(${num1})\n`;
    };
    
    // メニューについては Ruby 側でも定義が必要のようだ
    Generator.sample2_menu_menu1 = function (block) {
        const menu1 = Generator.getFieldValue(block, 'menu1') || null;
        return [menu1, Generator.ORDER_ATOMIC];
    };
    Generator.sample2_menu_menu2 = function (block) {
        const menu2 = Generator.getFieldValue(block, 'menu2') || null;
        return [menu2, Generator.ORDER_ATOMIC];
    };
    
    return Generator;
}
