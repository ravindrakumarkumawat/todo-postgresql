CREATE TABLE lists(
    list_id SERIAL PRIMARY KEY NOT NULL,
    list_name VARCHAR(255) NOT NULL
)

INSERT INTO lists (list_name) VALUES ('Shopping of book')

-- CREATE TABLE tasks(
--     task_id SERIAL PRIMARY KEY NOT NULL,
--     task_name VARCHAR(255) NOT NULL,
--     scheduled VARCHAR(255),
--     completed boolean DEFAULT FALSE,
--     priority INTEGER DEFAULT 0,
--     note text,
--     list_id INTEGER
-- )

-- ALTER TABLE tasks ADD CONSTRAINT fk_lists_tasks FOREIGN KEY (list_id) REFERENCES lists (list_id) ON DELETE CASCADE