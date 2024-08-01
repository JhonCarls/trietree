document.addEventListener("DOMContentLoaded", () => {
    const pythonWords = [
        "False", "None", "True", "and", "as", "assert", "async", "await", "break",
        "class", "continue", "def", "del", "elif", "else", "except", "finally", "for",
        "from", "global", "if", "import", "in", "is", "lambda", "nonlocal", "not",
        "or", "pass", "raise", "return", "try", "while", "with", "yield", "abs",
        "delattr", "hash", "memoryview", "set", "all", "dict", "help", "min",
        "setattr", "any", "dir", "hex", "next", "slice", "ascii", "divmod", "id",
        "object", "sorted", "bin", "enumerate", "input", "oct", "staticmethod", "bool",
        "eval", "int", "open", "str", "breakpoint", "exec", "isinstance", "ord", "sum",
        "bytearray", "filter", "issubclass", "pow", "super", "bytes", "float", "iter",
        "print", "tuple", "callable", "format", "len", "property", "type", "chr",
        "frozenset", "list", "range", "vars", "classmethod", "getattr", "locals",
        "repr", "zip", "compile", "globals", "map", "reversed", "__import__", "complex",
        "hasattr", "max", "round", "__name__", "__doc__", "__package__", "__loader__",
        "__spec__", "__build_class__", "__import__", "__annotations__", "__debug__",
        "__class__", "__bases__", "__dict__", "__mro__", "__subclasses__", "__init__",
        "__call__", "__getitem__", "__setitem__", "__delitem__", "__iter__", "__next__",
        "__enter__", "__exit__", "__getattr__", "__setattr__", "__delattr__", "__new__",
        "__del__"
    ];

    const trie = new Trie();
    pythonWords.forEach(word => trie.insert(word));

    const searchInput = document.getElementById("search");
    const resultsContainer = document.getElementById("results");

    searchInput.addEventListener("input", () => {
        const query = searchInput.value.trim();
        resultsContainer.innerHTML = "";
        if (query) {
            const results = trie.search(query);
            results.forEach(word => {
                const div = document.createElement("div");
                div.className = "result-item";
                div.textContent = word;
                resultsContainer.appendChild(div);
            });
        }
    });
});
