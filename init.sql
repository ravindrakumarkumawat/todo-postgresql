CREATE TABLE lists
(
    list_id SERIAL PRIMARY KEY NOT NULL,
    list_name VARCHAR(255) NOT NULL
)

-- INSERT INTO lists (list_name) VALUES ('Shopping of book')

CREATE TABLE tasks
(
    task_id SERIAL PRIMARY KEY NOT NULL,
    task_name VARCHAR(255) NOT NULL,
    task_scheduled DATE,
    completed boolean DEFAULT FALSE,
    priority INTEGER DEFAULT 0,
    note text,
    list_id INTEGER
    -- list_id INTEGER REFERENCES lists (list_id)
)

-- UPDATE tasks SET list_id = 1 WHERE task_id = 3;

-- ALTER TABLE tasks ADD CONSTRAINT tasks_list_id_fkey FOREIGN KEY (list_id) REFERENCES lists (list_id) ON DELETE CASCADE