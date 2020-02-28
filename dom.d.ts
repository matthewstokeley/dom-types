declare dom {


	/**
	 * 
	 */

	interface Node {

		/**
		 * 
		 * @type    {Int}
		 */

		nodeType: Int,

		/**
		 * 
		 * @param   {Node}
		 */
		contains: function( node: Node ),

		/**
		 * 
		 * @param   {Node}
		 */
		appendChild: function( node: Node )

	}

	interface Element {

	}

	interface NodeList {

	}

	interface HTMLCollection {

	}

	interface Event {

	}

	interface Document {

	}

	interface Window {

	}

}