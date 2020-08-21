class CreateUrls < ActiveRecord::Migration[5.1]
  def change
    create_table :urls do |t|
      t.string :short_url
      t.string :original_url
      t.integer :view_count

      t.timestamps
    end
  end
end
