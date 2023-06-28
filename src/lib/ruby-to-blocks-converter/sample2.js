/* global Opal */
import _ from 'lodash';
/*
const matchField = (field) => {
    if(/sample2Command0/)
	return 'code1';
    if(/sample2Value0/)
	return 'code2';
    if(/sample2Flag0/)
	return 'code3';
    }
}
*/
/**
* Sample2 Blocks Ruby converter
*/
const Sample2BlocksConverter = {

    onSend: function (receiver, name, args, rubyBlockArgs, rubyBlock) {
	let block;
	if ((this._isSelf(receiver) || receiver === Opal.nil) && !rubyBlock) {
	    switch (name) {
	    case "sample2Command0":
		if (args.length === 0) {
		    block = this._createBlock("sample2_command0", "statement");
		}
		break;
	    case "sample2Flag0":
		if (args.length === 0) {
		    block = this._createBlock("sample2_flag0", "value_boolean");
		}
		break;
	    case "sample2Value0":
		if (args.length === 0) {
		    block = this._createBlock("sample2_value0", "value");
		}
		break;
	    case "sample2Command1":
		if (args.length === 2 && this._isStringOrBlock(args[0]) && this._isNumberOrBlock(args[1])) {
		    block = this._createBlock("sample2_command1", "statement");
		    this._addTextInput(
			block,			
			"TEXT",
			args[0]
		    );
		    this._addNumberInput(
			block,
			"NUM",
			"math_number",
			args[1],
			0
		    );		    
		}
		break;
	    case "sample2Command2":
		if (args.length === 1 && this._isStringOrBlock(args[0])) {
		    block = this._createBlock("sample2_command2", "statement");
		    this._addFieldInput(
			block,
			"TEXT1",
			"sample2_menu_menu1",
			"menu1",
			args[0],
			"Right_1"
		    );
		}
		break;
	    case "sample2Command3":
		if (args.length === 2 && this._isStringOrBlock(args[0]) && this._isNumberOrBlock(args[1])) {
		    block = this._createBlock("sample2_command3", "statement");
		    this._addFieldInput(
			block,
			"TEXT1",
			"sample2_menu_menu1",
			"menu1",
			args[0],
			"Right_1"
		    );
		    this._addFieldInput(
			block,
			"NUM1",
			"sample2_menu_menu2",
			"menu2",
			args[1],
			"Left_2"
		    );
		}
		break;		
	    }	    
	}
	return block;
    },

/*
    onVasgn: function (scope, variable, rh, code) {
	let block;
	let pat, pin;
	switch (variable.name) {
	case 'motorEn':
	    pat = /motorEn\s*=\s*GPIO.new\(12,\s*GPIO::OUT\)/;
	    if(pat.test(code)){
		block = this._createBlock('kani_motor_enable_init_n', 'statement');
	    }
	    break;
	}
	return block;
    },
*/
    // onOpAsgn: function (lh, operator, rh) {},
    // onVar: function (scope, variable) {},
    // onAnd: function (operands) {},
    // onOr: function (operands) {},
    // onUntil: function (cond, statement) {},
    // onIf: function (cond, statement, elseStatement) {},
    // onDefs: function (node, saved) {},
};

export default Sample2BlocksConverter;
