import { Variable } from "../Variable";

export class SetVarVariable extends Variable {
	public constructor() {
		super("setvar", (name: string, value: any) => {
			this.container.databases.vars.set(name, value);
		});
	}
}