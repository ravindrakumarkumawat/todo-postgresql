CREATE TABLE lists(
    list_id bigserial PRIMARY KEY NOT NULL,
    list_name VARCHAR(255) NOT NULL
)

CREATE TABLE tasks(
    task_id bigserial PRIMARY KEY NOT NULL,
    task_name VARCHAR(255) NOT NULL,
    scheduled VARCHAR(255),
    completed boolean DEFAULT FALSE,
    priority INTEGER DEFAULT 0,
    note text,
    list_id bigserial
)

ALTER TABLE tasks ADD CONSTRAINT fk_lists_tasks FOREIGN KEY (list_id) REFERENCES lists (list_id) ON DELETE CASCADE