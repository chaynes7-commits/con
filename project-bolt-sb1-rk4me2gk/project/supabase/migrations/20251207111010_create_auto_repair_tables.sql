/*
  # Auto Repair Shop Database Schema

  1. New Tables
    - `contact_submissions`
      - `id` (uuid, primary key)
      - `name` (text)
      - `email` (text)
      - `phone` (text)
      - `vehicle_make_model` (text)
      - `service_needed` (text)
      - `message` (text)
      - `created_at` (timestamptz)
    
    - `appointments`
      - `id` (uuid, primary key)
      - `name` (text)
      - `email` (text)
      - `phone` (text)
      - `vehicle_make_model` (text)
      - `service_type` (text)
      - `preferred_date` (date)
      - `preferred_time` (text)
      - `additional_notes` (text)
      - `status` (text, default 'pending')
      - `created_at` (timestamptz)

  2. Security
    - Enable RLS on both tables
    - Add policies for public insert (anyone can submit forms)
    - Restrict read access to authenticated users only
*/

CREATE TABLE IF NOT EXISTS contact_submissions (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  email text NOT NULL,
  phone text NOT NULL,
  vehicle_make_model text NOT NULL,
  service_needed text NOT NULL,
  message text DEFAULT '',
  created_at timestamptz DEFAULT now()
);

CREATE TABLE IF NOT EXISTS appointments (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  email text NOT NULL,
  phone text NOT NULL,
  vehicle_make_model text NOT NULL,
  service_type text NOT NULL,
  preferred_date date NOT NULL,
  preferred_time text NOT NULL,
  additional_notes text DEFAULT '',
  status text DEFAULT 'pending',
  created_at timestamptz DEFAULT now()
);

ALTER TABLE contact_submissions ENABLE ROW LEVEL SECURITY;
ALTER TABLE appointments ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Allow public to submit contact forms"
  ON contact_submissions
  FOR INSERT
  TO anon
  WITH CHECK (true);

CREATE POLICY "Allow public to book appointments"
  ON appointments
  FOR INSERT
  TO anon
  WITH CHECK (true);

CREATE POLICY "Allow authenticated users to view contacts"
  ON contact_submissions
  FOR SELECT
  TO authenticated
  USING (true);

CREATE POLICY "Allow authenticated users to view appointments"
  ON appointments
  FOR SELECT
  TO authenticated
  USING (true);