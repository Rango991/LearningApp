# One-off helper: attaches diagram ids to learn cards by card title.
# Usage: python3 scripts/attach-diagrams.py <content file> '<json {title: id}>'
import json, re, sys

path, mapping = sys.argv[1], json.loads(sys.argv[2])
s = open(path).read()
for title, did in mapping.items():
    t = title.replace("'", "\\'")
    # helper style: card('🔬', 'Title', '...', [...]) on one line
    m = re.search(r"card\('[^']*', '" + re.escape(t) + r"', .*\),\n", s)
    if m:
        line = m.group(0)
        if line.endswith(f", '{did}'),\n"):
            continue
        body = line[:-3]  # strip "),\n"
        if body.endswith(']'):
            new = body + f", '{did}'),\n"
        else:
            new = body + f", undefined, '{did}'),\n"
        s = s.replace(line, new, 1)
        continue
    # object style: title: 'Title',
    m = re.search(r"(\n(\s+)title: '" + re.escape(t) + r"',\n)", s)
    if m and f"diagram: '{did}'" not in s[m.end():m.end() + 400].split('}')[0]:
        s = s.replace(m.group(1), m.group(1) + f"{m.group(2)}diagram: '{did}',\n", 1)
        continue
    if not m:
        sys.exit(f'card not found: {title} in {path}')
open(path, 'w').write(s)
print(f'{path}: {len(mapping)} diagrams attached')
