package com.zero.kids;
import android.os.Bundle;
import android.widget.TextView;
import androidx.appcompat.app.AppCompatActivity;

public class MainActivity extends AppCompatActivity {
    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        TextView tv = new TextView(this);
        tv.setText("Zero Kids App is Live!\nReady for Parent Control.");
        tv.setTextSize(24);
        tv.setPadding(50, 50, 50, 50);
        setContentView(tv);
    }
}
